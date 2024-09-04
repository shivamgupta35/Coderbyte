<?php 

// Initialize cURL session
$ch = curl_init('https://coderbyte.com/api/challenges/json/age-counting');

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);

// Execute the cURL request and get the response
$response = curl_exec($ch);

// Close the cURL session
curl_close($ch);

// Decode the JSON response
$responseData = json_decode($response, true);

// Check if the 'data' key exists in the response
if (isset($responseData['data'])) {
    // Extract the data string
    $dataString = $responseData['data'];
    
    // Split the data string into individual items
    $items = explode(', ', $dataString);

    // Initialize a counter for ages >= 50
    $count = 0;

    // Iterate over each item
    foreach ($items as $item) {
        // Extract age value using regular expressions
        if (preg_match('/age=(\d+)/', $item, $matches)) {
            $age = (int)$matches[1];
            // Increment the counter if age is 50 or more
            if ($age >= 50) {
                $count++;
            }
        }
    }

    // Print the final count
    echo $count;
} else {
    echo "Invalid response format.";
}

?>
