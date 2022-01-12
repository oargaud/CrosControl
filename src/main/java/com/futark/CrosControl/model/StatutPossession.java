package com.futark.CrosControl.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class StatutPossession {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String statut;

    public StatutPossession() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut.toUpperCase();
    }
}
