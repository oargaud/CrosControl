package com.futark.CrosControl.repository;


import com.futark.CrosControl.model.CommandeEsp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CommandeEspRepository extends JpaRepository<CommandeEsp,Long> {




    @Query(value = "SELECT * FROM commande_esp WHERE name LIKE %:#{#name}%  "
            , nativeQuery = true)
    CommandeEsp FindByName(@Param("name") String name);
}
