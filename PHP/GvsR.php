<?php

#--------------------#
#    PHP for Fun     #
#--------------------#

$gridSize = array_map('intval', explode(",", str_replace(" ", "", readline("enter grid size" . PHP_EOL))));

$grid = [];

for ($i=0; $i < $gridSize[0]; $i++) { 
    array_push($grid , array_map('intval', str_split(readline($i+1 . " Row of grid" . PHP_EOL))));
};

$target = array_map('intval', explode(",", str_replace(" ", "", readline("enter target" . PHP_EOL))));
print_r ($grid);
