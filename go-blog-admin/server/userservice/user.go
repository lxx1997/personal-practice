package userservice

import (
	"go-blog-admin/models"

	"github.com/casbin/casbin"
)

type Login struct {
	Username string
	Password string
}

type User struct {
	ID       int
	Username string
	Password string
	Role     int

	CreatedBy  string
	ModifiedBy string

	PageNum  int
	PageSize int

	Enforcer *casbin.Enforcer `inject:""`
}

func (login *Login) UserLogin() bool {
	username, _ := models.CheckUserName(login.Username)
	if username {
		return true
	}
	return false
}
