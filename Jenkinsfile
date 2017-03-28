node('master') {
  stage 'Checkout'
  git url: 'https://github.com/k2works/etude_op10_no10.git'

  stage 'Build'
  sh "docker build . -t app:base"

  stage 'Run'
  sh "docker build . -f Dockerfile-dev"
}