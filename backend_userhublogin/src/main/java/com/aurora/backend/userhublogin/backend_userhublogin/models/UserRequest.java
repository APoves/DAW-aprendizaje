package com.aurora.backend.userhublogin.backend_userhublogin.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class UserRequest {

    @NotBlank
    @Size(min = 4, max = 18)
    private String username;
    private String email;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @NotEmpty(message = "El correo electrónico no puede estar vacío.")
    @Size(min = 5)
    @Email(message = "No es una direccion de correo válida.")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}