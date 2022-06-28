<?php // getting all form values
$name = $_POST['name'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$website = $_POST['website'];
$message = $_POST['message'];

if (!empty($email) && !empty($message)) { // if email and mesage field not emppty
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $reciever = "ozopedro0@gmail.com"; //  email reciever address
        $subject = "from: $name <$email>"; // subject of the email
        $body = "name: $name\nEmail: $email\nPhone_number: $phone_number\website\nMessage: $message\n\nRegards,\n$name";
        $sender = "from: $email"; //sender email
        if (mail($reciever, $subject, $body, $sender)) { // mail is an inbuilt php function to send mail
            echo "your message has been sent";
        } else {
            echo "sorry failed to send your message!";
        }
    } else {
        echo "enter a valid email address!";
    }
} else {
    "email and password field is required!";
}
