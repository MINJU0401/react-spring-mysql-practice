package com.kwak.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kwak.board.entity.LikeyEntity;

@Repository
public interface LikeyRepository extends JpaRepository<LikeyEntity, Integer> {

}
