package main

import (
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/microlib/logger/pkg/multi"
	"github.com/rs/cors"
)

func main() {

	// initialise the logger
	var logger *multi.Logger
	if os.Getenv("LOG_LEVEL") == "" {
		logger = multi.NewLogger(multi.COLOR, multi.INFO)
	} else {
		logger = multi.NewLogger(multi.COLOR, os.Getenv("LOG_LEVEL"))
	}

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "DELETE", "POST", "PUT", "OPTIONS"},
		AllowedHeaders: []string{"Accept", "Content-Type", "Content-Length", "Accept-Encoding", "X-CSRF-Token", "Authorization", "Accept-Language"},
	})

	r := mux.NewRouter()
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./fast-cicd-html/")))
	handler := c.Handler(r)
	logger.Info("Starting server on port " + os.Getenv("SERVER_PORT"))
	http.ListenAndServe(":"+os.Getenv("SERVER_PORT"), handler)
}
