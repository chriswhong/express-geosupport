### Endpoint

`/{Function Code}?{Valid, Input param}={Value}`

See [here](https://github.com/chriswhong/node-geosupport/blob/master/src/csv/work_area_layouts/input/WA1.csv) for the mappings - input params are "alt_names" columns, functions are "functions" column.

For example:

`/1A?street_code=blah`.

### Docker Development

Bash

docker run -it -v $PWD:/express-geosupport -w /express-geosupport -p 4000:4000 chriswhong/geosupport /bin/bash

Run the server

docker run -it -v $PWD:/express-geosupport -w /express-geosupport -p 4000:4000 chriswhong/geosupport ./bin/www
