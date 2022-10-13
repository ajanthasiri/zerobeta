package com.test.jwt.service;

import com.test.jwt.entity.User;
import com.test.jwt.repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.test.jwt.dto.UserDTO;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UsersService {
    @Autowired
    private final UserRepo userRepo;
    @Autowired
    private final ModelMapper modelMapper;

    public UsersService(ModelMapper modelMapper, UserRepo userRepo) {
        this.modelMapper = modelMapper;
        this.userRepo = userRepo;
    }

    public UserDTO saveUser(UserDTO userDTO){
        String password=userDTO.getPassword();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(password);
        userDTO.setPassword(hashedPassword);
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    public List<UserDTO> getAllUsers(){
        List<User>userList=userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>(){}.getType());
    }
}
