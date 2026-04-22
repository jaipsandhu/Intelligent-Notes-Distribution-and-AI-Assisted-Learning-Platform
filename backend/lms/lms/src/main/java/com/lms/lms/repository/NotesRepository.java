package com.lms.lms.repository;

import com.lms.lms.entity.Notes;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NotesRepository extends MongoRepository<Notes, String> {

    List<Notes> findBySubject(String subject);

}