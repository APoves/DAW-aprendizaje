package com.aurora.backend.userhublogin.backend_userhublogin.services;

import java.util.List;
import java.util.Optional;

import com.aurora.backend.userhublogin.backend_userhublogin.models.entities.User;

public interface UserService {

    List<User> findAll();

    Optional<User> findById(Long id);

    Optional <User> save (User user);
    User update (User user, Long id);


    void remove(Long id);
}
