#!/bin/bash

LOG_LEVEL=info
SERVER_PORT=9003
VERSION=1.0.1
NAME=golang-cicd-webserver

export LOG_LEVEL NAME SERVER_PORT VERSION 

./build/golang-static-webserver
