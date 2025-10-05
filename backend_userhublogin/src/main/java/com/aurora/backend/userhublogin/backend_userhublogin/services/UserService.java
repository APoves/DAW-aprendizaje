package com.aurora.backend.userhublogin.backend_userhublogin.services;

import java.util.List;
import java.util.Optional;

import com.aurora.backend.userhublogin.backend_userhublogin.models.entities.User;
import com.aurora.backend.userhublogin.backend_userhublogin.models.entities.UserRequest;

public interface UserService {

    List<User> findAll();

    Optional<User> findById(Long id);

    User save(User user);
    Optional<User> update(UserRequest user, Long id);

    void remove(Long id);
}
