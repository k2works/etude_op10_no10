[![CircleCI](https://circleci.com/gh/k2works/etude_op10_no10.svg?style=svg)](https://circleci.com/gh/k2works/etude_op10_no10)

# Étude Op. 10, No. 10

## Quick Start
### Using Vagrant
```bash
vagrant up
vagrant ssh
cd /vagrant
./bin/server
```

### Using Docker
```bash
docker build . -t app:base
docker run --name app --rm -p 5000:5000 -p 9292:9292 -v $(PWD):/container -i -t app:base /bin/bash
cd /container
```

### Documents
```bash
bundle exec yard server
```
Documents is [here](./docs/README.md)
