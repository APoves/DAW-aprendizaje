package com.aurora.backend.userhublogin.backend_userhublogin.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.aurora.backend.userhublogin.backend_userhublogin.models.dto.UserDto;
import com.aurora.backend.userhublogin.backend_userhublogin.models.dto.mapper.DtoMapperUser;
import com.aurora.backend.userhublogin.backend_userhublogin.models.entities.Role;
import com.aurora.backend.userhublogin.backend_userhublogin.models.entities.User;
import com.aurora.backend.userhublogin.backend_userhublogin.models.request.UserRequest;
import com.aurora.backend.userhublogin.backend_userhublogin.repositories.RoleRepository;
import com.aurora.backend.userhublogin.backend_userhublogin.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public List<UserDto> findAll() {
        
        List<User> users = (List<User>) repository.findAll();
        
        return users
                .stream()
                .map(u -> DtoMapperUser.builder().setUser(u).build())
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<UserDto> findById(Long id) {
        
        return repository.findById(id).map(u -> DtoMapperUser
                .builder()
                .setUser(u)
                .build());
    }

    @Override
    @Transactional
    public UserDto save(User user) {
        
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Optional<Role> o = roleRepository.findByName("ROLE_USER");

        List<Role> roles = new ArrayList<>();
        if (o.isPresent()) {
            roles.add(o.orElseThrow());
        }
        user.setRoles(roles);

        return DtoMapperUser.builder().setUser(repository.save(user)).build();
    }

    @Override
    @Transactional
    public Optional<UserDto> update(UserRequest user, Long id) {
        
        Optional<User> o = repository.findById(id);
        User userOptional = null;
        if (o.isPresent()) {
            User userDb = o.orElseThrow();
            userDb.setUsername(user.getUsername());
            userDb.setEmail(user.getEmail());
            userOptional = repository.save(userDb);
        }

        return Optional.ofNullable(DtoMapperUser.builder().setUser(userOptional).build());
    }

    @Override
    @Transactional
    public void remove(Long id) {
        repository.deleteById(id);
    }
}
