package br.com.site.backend.domain.bairro;

import br.com.site.backend.domain.cidade.Cidade;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "bairro")
@Getter
@Setter
public class Bairro implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cidades")
    private String cidades;


    @JoinColumn(name = "cidade_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL )
    private Cidade cidade;

    //ligar tabela bairro coma tabela residencia
    //@JsonIgnore
    //@OneToMany(mappedBy = "bairro")
    //private List<Residencia> ResidenciaList;


}