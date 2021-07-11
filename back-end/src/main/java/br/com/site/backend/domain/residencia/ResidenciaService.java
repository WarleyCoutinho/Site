package br.com.site.backend.domain.residencia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;

@Service
public class ResidenciaService {
    @Autowired
    private ResidenciaRepository ResidenciaRepository;

    // metodo listar ou bucar todos
    public List<Residencia> findAll() {
        return ResidenciaRepository.findAll();
    }

    //metodo  Listar ou buscar por id
    public Residencia findById(long id){
        return ResidenciaRepository.findById(id).get();
    }

    // metodo salvar
    public Residencia save(Residencia Residencia, Errors errors) {
        return ResidenciaRepository.save(Residencia);
    }

    //metodo deletar
    public void deleteById(long id){
        ResidenciaRepository.deleteById(id);
    }
}
