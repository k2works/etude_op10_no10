# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "hiroshima-arc/manhattan"
  config.vm.box_version = "1.0.0"

  config.vm.network :forwarded_port, guest:8080, host:9000, id:"jenkins"
  config.vm.network :forwarded_port, guest:3000, host:3000, id:"ruby"
  config.vm.network :forwarded_port, guest:1234, host:1234, id:"ruby-debug"
  config.vm.network :private_network, ip:"192.168.30.1"

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
  end
end
