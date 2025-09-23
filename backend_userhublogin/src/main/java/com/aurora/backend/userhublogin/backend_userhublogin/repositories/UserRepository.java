package com.aurora.backend.userhublogin.backend_userhublogin.repositories;

import org.springframework.data.repository.CrudRepository;
import com.aurora.backend.userhublogin.backend_userhublogin.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long>{



}
