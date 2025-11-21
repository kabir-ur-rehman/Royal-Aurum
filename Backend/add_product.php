<?php
// CORS Headers for Laragon
header('Access-Control-Allow-Origin: http://localhost:8080');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

require_once "config.php";

// Define the directory where images will be stored
$target_dir = "inc/";

// Create directory if it doesn't exist
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

$error_message = "";
$success_message = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data safely
    $name = $_POST['product_name'] ?? '';
    $description = $_POST['description'] ?? '';
    $price = $_POST['price'] ?? '';
    $stock = $_POST['stock'] ?? '';
    $image_path = ''; // Variable to store the path in the database

    // Validate required fields
    if (empty($name) || empty($description) || empty($price) || empty($stock)) {
        $error_message = "All fields are required.";
    } else {
        // --- Image Upload Logic ---
        $uploadOk = 1;
        
        if (isset($_FILES["product_image"]) && $_FILES["product_image"]["error"] == 0) {
            $file_name = basename($_FILES["product_image"]["name"]);
            // Create a unique file name to prevent conflicts
            $new_file_name = uniqid() . "_" . $file_name; 
            $target_file = $target_dir . $new_file_name;
            $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

            // Check if image file is a real image
            $check = getimagesize($_FILES["product_image"]["tmp_name"]);
            if($check === false) {
                $error_message = "Error: File is not an image.";
                $uploadOk = 0;
            }

            // Check file size (e.g., limit to 5MB)
            if ($_FILES["product_image"]["size"] > 5000000) {
                $error_message = "Error: Sorry, your file is too large (max 5MB).";
                $uploadOk = 0;
            }

            // Allow certain file formats
            if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
                $error_message = "Error: Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                $uploadOk = 0;
            }

            // Check if $uploadOk is set to 0 by an error
            if ($uploadOk == 0) {
                // Error message already set above
            } else {
                // if everything is ok, try to upload file
                if (move_uploaded_file($_FILES["product_image"]["tmp_name"], $target_file)) {
                    // Success: Save the path for the database
                    $image_path = $target_file; 
                } else {
                    $error_message = "Error: Sorry, there was an error uploading your file.";
                    $uploadOk = 0;
                }
            }
        } else {
            $error_message = "Error: Please select an image file.";
            $uploadOk = 0;
        }
        // --- End Image Upload Logic ---

        if ($uploadOk == 1) {
            try {
                // Database connection
                $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                // SQL Insert
                $sql = "INSERT INTO product_table (Name, description, price, stock, image_path) 
                        VALUES (:Name, :description, :price, :stock, :image_path)";

                $stmt = $conn->prepare($sql);

                // Bind parameters
                $stmt->bindParam(':Name', $name);
                $stmt->bindParam(':description', $description);
                $stmt->bindParam(':price', $price);
                $stmt->bindParam(':stock', $stock);
                $stmt->bindParam(':image_path', $image_path);

                // Execute
                if ($stmt->execute()) {
                    $success_message = "Product has been added successfully!";
                    // Clear form fields
                    $name = $description = $price = $stock = '';
                } else {
                    $error_message = "Error: Failed to insert product into database.";
                }
                
                $conn = null;

            } catch (PDOException $e) {
                $error_message = "Database Error: " . $e->getMessage();
                $conn = null;
            }
        }
    }
}
?>

<!doctype html>
<html lang="en">
    <head>
        <title>Add Product</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
        <style>
            .alert {
                margin-top: 20px;
            }
            .form-container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
        </style>
    </head>

    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">Royal Aurum</a>
                    <!-- Updated link to go back to React dashboard -->
                    <a href="http://localhost:8080/admin/dashboard" class="btn btn-outline-light">Back to Dashboard</a>
                </div>
            </nav>
        </header>
        
        <main class="container mt-4">
            <div class="form-container">
                <h3 class="text-center mb-4">Add New Product</h3>
                
                <!-- Success/Error Messages -->
                <?php if (!empty($success_message)): ?>
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <?php echo htmlspecialchars($success_message); ?>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <script>
                        // Send message to parent window (React dashboard) to close modal and refresh
                        setTimeout(function() {
                            // Send success message to parent
                            window.parent.postMessage({
                                type: 'formSubmission',
                                status: 'success',
                                message: '<?php echo $success_message; ?>'
                            }, '*');
                        }, 1000);
                    </script>
                <?php endif; ?>
                
                <?php if (!empty($error_message)): ?>
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <?php echo htmlspecialchars($error_message); ?>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                <?php endif; ?>

                <form action="" method="post" enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="product_name" class="form-label">Product Name</label>
                        <input
                            type="text"
                            class="form-control"
                            name="product_name" 
                            id="product_name"
                            placeholder="Enter product name"
                            value="<?php echo isset($name) ? htmlspecialchars($name) : ''; ?>"
                            required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea
                            class="form-control"
                            name="description"
                            id="description"
                            placeholder="About your product"
                            rows="3"
                            required
                        ><?php echo isset($description) ? htmlspecialchars($description) : ''; ?></textarea>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="price" class="form-label">Price ($)</label>
                            <input
                                type="number"
                                step="0.01"
                                class="form-control"
                                name="price"
                                id="price"
                                placeholder="0.00"
                                value="<?php echo isset($price) ? htmlspecialchars($price) : ''; ?>"
                                required
                            />
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="stock" class="form-label">Stock Quantity</label>
                            <input
                                type="number"
                                class="form-control"
                                name="stock"
                                id="stock"
                                placeholder="0"
                                min="0"
                                value="<?php echo isset($stock) ? htmlspecialchars($stock) : ''; ?>"
                                required
                            />
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="product_image" class="form-label">Product Image</label>
                        <input
                            type="file"
                            class="form-control"
                            name="product_image"
                            id="product_image"
                            accept="image/*"
                            required
                        />
                        <div class="form-text">Supported formats: JPG, JPEG, PNG, GIF (Max 5MB)</div>
                    </div>
                    
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-success btn-lg">Add Product</button>
                        <!-- Updated cancel button to go back to React dashboard -->
                        <a href="http://localhost:8080/admin/dashboard" class="btn btn-secondary">Cancel</a>
                    </div>
                </form>
            </div>
        </main>

        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
        
        <script>
            // Clear form after successful submission
            document.addEventListener('DOMContentLoaded', function() {
                const successAlert = document.querySelector('.alert-success');
                if (successAlert) {
                    // Clear file input
                    document.getElementById('product_image').value = '';
                }
            });
        </script>
    </body>
</html>