

### Docker Development

Bash

docker run -it -v $PWD:/express-geosupport -w /express-geosupport -p 4000:4000 chriswhong/geosupport /bin/bash

Run the server

docker run -it -v $PWD:/express-geosupport -w /express-geosupport -p 4000:4000 chriswhong/geosupport ./bin/www
