package com.futark.CrosControl.controler;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.futark.CrosControl.model.BD;
import com.futark.CrosControl.model.Photo;
import com.futark.CrosControl.model.StatutPossession;
import com.futark.CrosControl.repository.BDRepository;
import com.futark.CrosControl.repository.PhotoRepository;
import com.futark.CrosControl.repository.StatutPossessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(value = "/bd")
public class BDControler {



    @Autowired
    public BDRepository bdRepository;

    @Autowired
    public PhotoRepository photoRepository;

    @Autowired
    public StatutPossessionRepository statutPossessionRepository;


//    @PostMapping("/create")
//    public ResponseEntity<BD> createBd(@RequestBody BD bd){
//
//        return new ResponseEntity(bdRepository.save(bd), HttpStatus.OK);
//    }


    @PostMapping("/create")
    public ResponseEntity<BD> createBd(@RequestParam("photo") Optional<MultipartFile> photo, @RequestParam String bd) throws IOException {

        BD newbd = new ObjectMapper().readValue(bd, BD.class);



        if(photo.isPresent()){
            ArrayList<String>tags = new ArrayList<>();
            tags.add("couv");
            newbd.getPhotos().add(photoRepository.save(new Photo(photo.get().getBytes(),tags)));
        }


        return new ResponseEntity(bdRepository.save(newbd), HttpStatus.OK);
    }


    @RequestMapping(
            value = "/del/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void delBd(@PathVariable(value = "id") Long id){
        bdRepository.deleteById(id);
    }

    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<BD> getBd(@PathVariable(value = "id") Long id){
        return new ResponseEntity(bdRepository.findById(id), HttpStatus.OK);
    }



    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<BD>> getALL(){
        return new ResponseEntity<>(bdRepository.findAll(), HttpStatus.OK);
    }


    @RequestMapping(
            value = "/statutpossession/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<StatutPossession>> getStatutALL(){
        return new ResponseEntity<>(statutPossessionRepository.findAll(), HttpStatus.OK);
    }



}
