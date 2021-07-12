package br.com.site.backend.domain.residencia;

import br.com.site.backend.response.controller.ReplyAbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/residencias")
public class ResidenciaController extends ReplyAbstractController {
    @Autowired
    private ResidenciaService ResidenciaService;

    // busca normal no banco de dados
    @GetMapping
    public ResponseEntity<?> findAll(){ return jsonResponse(ResidenciaService.findAll()); }

    //busca por id no banco de dados
    @GetMapping("{id}")
    public ResponseEntity<?> findById(@PathVariable long id){ return jsonResponse(ResidenciaService.findById(id)); }


    // salvar no banco de dados
    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody Residencia residencia, Errors errors){
        return jsonResponse(ResidenciaService.save(residencia, errors));
    }

    // Atualizar no banco de dados
    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody Residencia residencia, Errors errors){
        return jsonResponse(ResidenciaService.save(residencia, errors));
    }

    //deletar por id no banco de dados
    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable long id){
        ResidenciaService.deleteById(id);
        return jsonResponse();
    }

}
