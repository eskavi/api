package eskavi.service.mockrepo;

import eskavi.model.implementation.Implementation;
import eskavi.model.user.User;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class MockUserRepositry {
    Map<String, User> repo;

    public MockUserRepositry() {
        this.repo = new HashMap<>();
    }

    public Optional<User> findByID(String email) {
        return Optional.ofNullable(repo.get(email));
    }

    public void save(User user) {
        repo.put(user.getEmailAddress(), user);
    }

    public void delete(User user) {
        repo.remove(user.getEmailAddress());
    }
}
