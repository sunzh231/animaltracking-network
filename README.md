# animaltracking-network
Hyperledger Composer食品溯源DEMO

docker build -t myorg/my-composer-rest-server .

"prepublish":"mkdirp ./dist && composer archive create --sourceType dir --sourceName . -a ./dist/animaltracking-network.bna",

./byfn.sh -m generate

./byfn.sh -m down

./byfn.sh -m up

mkdir -p ./dist && composer archive create --sourceType dir --sourceName . -a ./dist/animaltracking-network.bna

composer card delete -n PeerAdmin@byfn-network-org1

composer card create -p connection-org1.json -u PeerAdmin -c Admin@org1.example.com-cert.pem -k f78acd49aef44beaf7b05ec3f331dd7e6dee0848b6f40e01a7ad89b496170581_sk -r PeerAdmin -r ChannelAdmin

composer card import -f PeerAdmin@byfn-network-org1.card

composer runtime install -c PeerAdmin@byfn-network-org1 -n animaltracking-network

composer network start -c PeerAdmin@byfn-network-org1 -a ./dist/animaltracking-network.bna -A admin -S adminpw

composer identity request -c PeerAdmin@byfn-network-org1 -u admin -s adminpw -d richard

composer card import -f admin@animaltracking-network.card

composer network ping -c admin@animaltracking-network
