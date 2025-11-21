<?php
// CORS Headers
header('Access-Control-Allow-Origin: http://localhost:8080');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

require_once "config.php";

// Define the directory where images are stored (must match add_product.php)
$target_dir = "inc/";

$conn = null;
$error_message = "";
$success_message = "";
$product_id = $_POST['id'] ?? $_GET['id'] ?? null;
// Include 'image_path' in the default array
$row = ['id' => '', 'name' => '', 'description' => '', 'price' => '', 'stock' => '', 'image_path' => '']; 

try {
    // Connect to database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // --- 1. HANDLE POST (UPDATE) REQUEST ---
    if ($_SERVER["REQUEST_METHOD"] === "POST") {

        if ($product_id === null || !isset($_POST['name'], $_POST['description'], $_POST['price'], $_POST['stock'])) {
            $error_message = "Error: Missing required form data.";
        } else {
            // Get and sanitize values
            $name = $_POST['name'];
            $description = $_POST['description'];
            $price = floatval($_POST['price']);
            $stock = intval($_POST['stock']);
            $current_image_path = $_POST['current_image_path'] ?? ''; // Hidden field from form
            $new_image_path = $current_image_path; // Assume no change unless new file uploaded

            $uploadOk = 1;
            
            // --- Image Update Logic ---
            if (isset($_FILES["product_image"]) && $_FILES["product_image"]["error"] == 0) {
                $file_name = basename($_FILES["product_image"]["name"]);
                $new_file_name = uniqid() . "_" . $file_name; 
                $target_file = $target_dir . $new_file_name;
                $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

                // Validation Checks (same as add_product.php)
                $check = getimagesize($_FILES["product_image"]["tmp_name"]);
                if($check === false || $_FILES["product_image"]["size"] > 5000000 || 
                   !in_array($imageFileType, ["jpg", "png", "jpeg", "gif"])) {
                    $error_message .= " | New image failed validation (size/type).";
                    $uploadOk = 0;
                }

                if ($uploadOk) {
                    if (move_uploaded_file($_FILES["product_image"]["tmp_name"], $target_file)) {
                        // Success: New file path
                        $new_image_path = $target_file; 
                        
                        // Delete the old file if it exists and is not the new one
                        if (!empty($current_image_path) && $current_image_path !== $new_image_path && file_exists($current_image_path)) {
                            unlink($current_image_path);
                        }
                    } else {
                        $error_message .= " | Error uploading new image file.";
                        $uploadOk = 0;
                    }
                }
            }
            // --- End Image Update Logic ---

            if ($uploadOk) {
                // Update query (ADDED image_path)
                $sql = "UPDATE product_table 
                        SET name = :name, description = :description, price = :price, stock = :stock, image_path = :image_path
                        WHERE id = :id";

                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $product_id);
                $stmt->bindParam(':name', $name);
                $stmt->bindParam(':description', $description);
                $stmt->bindParam(':price', $price);
                $stmt->bindParam(':stock', $stock);
                $stmt->bindParam(':image_path', $new_image_path); // Bind the new or existing image path

                if ($stmt->execute()) {
                    $success_message = "Product ID " . htmlspecialchars($product_id) . " updated successfully!";
                    // Redirect back to dashboard after successful update
                    header("Location: http://localhost:8080/admin/dashboard?success=Product updated successfully");
                    exit();
                } else {
                    $error_message .= " | Failed to update product in database!";
                }
            }
        }
    } 
    
    // --- 2. FETCH DATA FOR FORM DISPLAY ---
    if ($product_id !== null) {
        // Fetch query (ADDED image_path)
        $stmt_select = $conn->prepare("SELECT id, name, description, price, stock, image_path FROM product_table WHERE id = :id");
        $stmt_select->bindParam(':id', $product_id);
        $stmt_select->execute();
        $fetched_row = $stmt_select->fetch(PDO::FETCH_ASSOC);

        if ($fetched_row) {
            $row = $fetched_row;
        } else {
            $error_message = "Error: Product not found with ID: " . htmlspecialchars($product_id);
        }
    } else {
        if (!$success_message && !$error_message) {
            $error_message = "Note: Please provide a Product ID in the URL (e.g., update_product.php?id=1) to load a product for editing.";
        }
    }

} catch (PDOException $e) {
    $error_message = "Database Error: " . $e->getMessage();
}

// Close connection
$conn = null;
?>

<!doctype html>
<html lang="en">
    <head>
        <title>Update Product</title>
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
        <style>
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
                    <a href="http://localhost:8080/admin/dashboard" class="btn btn-outline-light">Back to Dashboard</a>
                </div>
            </nav>
        </header>

        <main class="container mt-4">
            <div class="form-container">
                <h3 class="text-center mb-4">Update Product (ID: <?php echo htmlspecialchars($product_id ?? 'N/A'); ?>)</h3>
                
                <!-- Success/Error Messages -->
                <?php if (!empty($success_message)): ?>
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <?php echo htmlspecialchars($success_message); ?>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <script>
                        // Redirect back to dashboard after success
                        setTimeout(function() {
                            window.location.href = 'http://localhost:8080/admin/dashboard?success=Product updated successfully';
                        }, 1500);
                    </script>
                <?php endif; ?>
                
                <?php if (!empty($error_message)): ?>
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <?php echo htmlspecialchars($error_message); ?>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                <?php endif; ?>

                <!-- Product Update Form -->
                <form method="POST" action="update_product.php?id=<?php echo htmlspecialchars($product_id ?? ''); ?>" enctype="multipart/form-data">
                    <!-- Hidden field for product ID -->
                    <input type="hidden" name="id" value="<?php echo htmlspecialchars($row['id']); ?>">
                    
                    <!-- Hidden field for current image path -->
                    <input type="hidden" name="current_image_path" value="<?php echo htmlspecialchars($row['image_path']); ?>">
                    
                    <div class="mb-3">
                        <label for="name" class="form-label">Product Name</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="name" 
                            name="name" 
                            value="<?php echo htmlspecialchars($row['name']); ?>" 
                            required
                        >
                    </div>
                    
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea 
                            class="form-control" 
                            id="description" 
                            name="description" 
                            rows="3" 
                            required
                        ><?php echo htmlspecialchars($row['description']); ?></textarea>
                    </div>
                    
                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="price" 
                            name="price" 
                            step="0.01" 
                            min="0" 
                            value="<?php echo htmlspecialchars($row['price']); ?>" 
                            required
                        >
                    </div>
                    
                    <div class="mb-3">
                        <label for="stock" class="form-label">Stock</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            id="stock" 
                            name="stock" 
                            min="0" 
                            value="<?php echo htmlspecialchars($row['stock']); ?>" 
                            required
                        >
                    </div>
                    
                    <div class="mb-3">
                        <label for="product_image" class="form-label">Product Image</label>
                        <input 
                            type="file" 
                            class="form-control" 
                            id="product_image" 
                            name="product_image" 
                            accept="image/*"
                        >
                        <div class="form-text">
                            Current image: 
                            <?php if (!empty($row['image_path'])): ?>
                                <img src="<?php echo htmlspecialchars($row['image_path']); ?>" alt="Current product image" style="max-width: 100px; max-height: 100px;">
                            <?php else: ?>
                                No image set
                            <?php endif; ?>
                        </div>
                    </div>
                    
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary">Update Product</button>
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
    </body>
</html>