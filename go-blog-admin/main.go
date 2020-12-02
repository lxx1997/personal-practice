package main

import (
	"fmt"
	"go-blog-admin/routers/api"
	"go-blog-admin/setting"
	"log"
	"net/http"
)

func main() {
	setting.Setup()
	// readTimeout := setting.ServerSetting.ReadTimeout
	// writeTimeout := setting.ServerSetting.WriteTimeout
	endPoint := fmt.Sprintf(":%d", setting.ServerSetting.HttpPort)
	// maxHeaderBytes := 1 << 20
	fmt.Println(setting.ServerSetting)
	server := &http.Server{
		Addr: endPoint,
		// ReadTimeout:    readTimeout,
		// WriteTimeout:   writeTimeout,
		// MaxHeaderBytes: maxHeaderBytes,
	}

	log.Printf("[info] start http server listening %s", endPoint)
	api.SetApi()

	_ = server.ListenAndServe()

}
