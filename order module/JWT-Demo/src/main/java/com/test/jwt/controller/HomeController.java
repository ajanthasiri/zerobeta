package com.test.jwt.controller;

import com.test.jwt.entity.User;
import com.test.jwt.model.JwtRequest;
import com.test.jwt.model.JwtResponse;
import com.test.jwt.repo.UserRepo;
import com.test.jwt.service.UserService;
import com.test.jwt.utility.JWTUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class HomeController {

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepo userRepo;

    @GetMapping("/")
    public String home() {
        return "Welcome!";
    }

    @PostMapping("/login")
    public JwtResponse login(@RequestBody JwtRequest jwtRequest) throws AuthenticationException {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        User user = userRepo.getUserByUsername(jwtRequest.getUsername());
        if (user == null) {
            throw new BadCredentialsException("1000");
        }
        if (!passwordEncoder.matches(jwtRequest.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("1000");
        }
//        try {
//            authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(
//                            jwtRequest.getUsername(),
//                            jwtRequest.getPassword()
//                    )
//            );
//        } catch (BadCredentialsException e) {
//            throw new Exception("INVALID_CREDENTIALS", e);
//        }

        final UserDetails userDetails
                = userService.loadUserByUsername(jwtRequest.getUsername());

        final String token =
                jwtUtility.generateToken(userDetails);


        return  new JwtResponse(token,user.getRole(),user.getId());
    }
}
