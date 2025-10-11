package com.aurora.backend.userhublogin.backend_userhublogin.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.aurora.backend.userhublogin.backend_userhublogin.models.entities.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {

    Optional<Role> findByName(String name);
}
