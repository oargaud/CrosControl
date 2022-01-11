package com.futark.CrosControl.repository;

import com.futark.CrosControl.model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;



public interface ImageRepository extends JpaRepository<ImageModel, Long> {
    Optional<ImageModel> findByName(String name);
}