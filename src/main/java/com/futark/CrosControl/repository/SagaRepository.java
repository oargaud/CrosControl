package com.futark.CrosControl.repository;

import com.futark.CrosControl.model.Saga;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SagaRepository extends JpaRepository<Saga,Long> {
}
