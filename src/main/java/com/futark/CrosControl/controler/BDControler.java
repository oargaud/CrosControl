package com.futark.CrosControl.controler;


import com.futark.CrosControl.model.BD;
import com.futark.CrosControl.repository.BDRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping(value = "/bd")
public class BDControler {



    @Autowired
    public BDRepository bdRepository;

    @PostMapping("/create")
    public BD createBd(@RequestBody BD bd){

        return bdRepository.save(bd);
    }





    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<BD>> getALL(){
        return new ResponseEntity<>(bdRepository.findAll(), HttpStatus.OK);
    }

}
