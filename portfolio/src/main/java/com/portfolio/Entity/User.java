package com.portfolio.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection = "Feedback")
public class User {
    @Id
    ObjectId id;
//    @NonNull
    String name;
    String email;
    String message;
}
