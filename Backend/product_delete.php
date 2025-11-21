<?php
require_once "config.php";

// Set JSON headers
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Check if an 'id' was passed in the URL (GET request)
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id_to_delete = $_GET['id'];

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // SQL to delete a single record using a WHERE clause and parameter
        $sql = "DELETE FROM product_table WHERE id = :id";

        $stmt = $conn->prepare($sql);
        // Bind the ID parameter to safely prevent SQL injection
        $stmt->bindParam(':id', $id_to_delete, PDO::PARAM_INT);
        
        $stmt->execute();

        // Check if any row was deleted
        if ($stmt->rowCount() > 0) {
            echo json_encode([
                "success" => true,
                "message" => "Product has been deleted successfully."
            ]);
        } else {
            // No product found with that ID
            echo json_encode([
                "success" => false,
                "message" => "Product not found or already deleted."
            ]);
        }

    } catch(PDOException $e) {
        echo json_encode([
            "success" => false,
            "message" => "Database error: " . $e->getMessage()
        ]);
    }

    $conn = null;
} else {
    // Return error if no ID was provided
    echo json_encode([
        "success" => false,
        "message" => "Invalid product ID provided."
    ]);
}
?>