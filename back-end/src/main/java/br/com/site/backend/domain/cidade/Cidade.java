package br.com.site.backend.domain.cidade;

import br.com.site.backend.domain.bairro.Bairro;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "cidade")
@Getter
@Setter
public class Cidade implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name="nome")
    private String nome;

    @JsonIgnore
    @OneToMany(mappedBy = "cidade")
    private List<Bairro> BairroListBairros;
}
