package com.aurora.backend.userhublogin.backend_userhublogin.services;

import java.util.List;
import java.util.Optional;

import com.aurora.backend.userhublogin.backend_userhublogin.models.dto.UserDto;
import com.aurora.backend.userhublogin.backend_userhublogin.models.entities.User;
import com.aurora.backend.userhublogin.backend_userhublogin.models.request.UserRequest;

public interface UserService {
    
    List<UserDto> findAll();

    Optional<UserDto> findById(Long id);

    UserDto save(User user);
    Optional<UserDto> update(UserRequest user, Long id);

    void remove(Long id);
}
