package main

import (
	"log"
	"net/http"
)

func main() {
	log.Println("Server start.")

	fs := http.FileServer(http.Dir("./"))
	http.Handle("/", fs)

	http.ListenAndServe(":8080", nil)
}
