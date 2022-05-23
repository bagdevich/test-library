#!/bin/sh

if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

npm link \
  $PEER_DEPS_NODE_MODULES_PATH/react \
  $PEER_DEPS_NODE_MODULES_PATH/classnames \
  $PEER_DEPS_NODE_MODULES_PATH/@material-ui/core \
  $PEER_DEPS_NODE_MODULES_PATH/@material-ui/icons 