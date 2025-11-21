<?php
// upload_csv.php
require_once 'config.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!isset($data['products']) || !is_array($data['products'])) {
        http_response_code(400);
        echo json_encode(array("message" => "Invalid or missing products data."));
        exit;
    }

    $products_to_insert = $data['products'];
    $success_count = 0;
    $error_list = [];

    try {
        // Using PDO like your other files
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare the INSERT statement
        $stmt = $conn->prepare("INSERT INTO product_table (name, description, price, stock) VALUES (:name, :description, :price, :stock)");
        
        foreach ($products_to_insert as $product) {
            $name = $product['name'] ?? null;
            $description = $product['description'] ?? null;
            $price = floatval($product['price'] ?? 0);
            $stock = intval($product['stock'] ?? 0);

            if (empty($name) || $price <= 0) {
                $error_list[] = "Skipped product: Name or Price is invalid for '$name'.";
                continue;
            }

            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':price', $price);
            $stmt->bindParam(':stock', $stock);

            if ($stmt->execute()) {
                $success_count++;
            } else {
                $error_list[] = "Failed to insert '$name'.";
            }
        }

        if ($success_count > 0) {
            http_response_code(200);
            echo json_encode(array(
                "message" => "{$success_count} products successfully inserted.",
                "count" => $success_count,
                "errors" => $error_list
            ));
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "No valid products were inserted.", "errors" => $error_list));
        }

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(array("message" => "Database error: " . $e->getMessage()));
    }
} else {
    http_response_code(405);
    echo json_encode(array("message" => "Method not supported."));
}
?>