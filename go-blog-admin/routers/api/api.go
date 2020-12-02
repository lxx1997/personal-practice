package api

import (
	"fmt"
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello golang http!")
}

func SetApi() {
	http.HandleFunc("/", index)
}
