# d3fordata

Class for the data bootcamp using d3

# Data import

Import the json into mongo via `mongoimport --db exoplanets --collection planets --drop --file ../json/nph-nstedAPI.json  --jsonArray`

# Filtering in mongo

You can use

`{pl_radj: {$ne: null}}  
{pl_hostname: 1, pl_name: 1, pl_radj: 1}  
{pl_radj: 1}`