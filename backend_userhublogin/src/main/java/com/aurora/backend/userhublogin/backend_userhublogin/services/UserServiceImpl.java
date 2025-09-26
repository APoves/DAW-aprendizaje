package com.aurora.backend.userhublogin.backend_userhublogin.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aurora.backend.userhublogin.backend_userhublogin.models.entities.User;
import com.aurora.backend.userhublogin.backend_userhublogin.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository repository;
    @Autowired

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return (List<User>) repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {

        return repository.findById(id);
    }

    @Override
    @Transactional
    public User save(User user) {

        return repository.save(user);
    }

    @Override
    @Transactional
    public void remove(Long id) {
        repository.deleteById(id);
    repository.deleteById(id);
    }
    
}
