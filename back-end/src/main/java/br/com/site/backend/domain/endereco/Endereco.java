package br.com.site.backend.domain.endereco;

import br.com.site.backend.domain.residencia.Residencia;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "endereco")
@Getter
@Setter
public class Endereco implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name="logradouro")
    private String logradouro;

    @Column(name="complemento")
    private String complemento;

    @Column(name="estado")
    private String estado;

    @Column(name="pais")
    private String pais;

    @JsonIgnore
    @OneToMany(mappedBy = "endereco")
    private List<Residencia> ResidenciaList;
}
