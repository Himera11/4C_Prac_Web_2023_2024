<?php
    $number = 7;
    $number1 = 2;

    if ($number % $number1 == 0)
        echo($number." = liczba jest podzielna bez reszty<br>");
    else
        echo($number." = nie jest podzielna bez reszty<br>");
    
        $number2 = 6;
        $number3 = 2;

        switch($number2 % $number3 == 0)
        {
            case 0:
                echo($number2." = nie jest <br>");
                break;
            case 1:
            echo($number2." = jest<br>");
                break;

        }
?>