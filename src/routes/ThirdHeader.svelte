<!-- ThirdHeader.svelte -->
<script>
  // You can handle component logic here
</script>

<div class="ThirdHeader">
  <div class="Container">
    <div class="ImageContainer">
      <img class="BentoAsset" src="https://via.placeholder.com/304x619" alt="Placeholder Image" />
    </div>
    <div class="ContentContainer">
      <div class="Content">
        <div class="Heading">Faites concevoir votre site web par des professionnels</div>
        <div class="Text">Mon agence est spécialisée dans la création de sites web de haute qualité pour les propriétaires de petites entreprises. Grâce à mon expertise et mon souci du détail, je garantie un site non seulement esthétiquement attrayant, mais aussi facile à utiliser et optimisé pour les moteurs de recherche.</div>
      </div>
      <div class="Actions">
        <div class="ButtonContainer primary">
          <div class="Button">Contactez-moi</div>
        </div>
        <div class="ButtonContainer secondary">
          <div class="Button">Voir mon travail</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .ThirdHeader {
    width: 1440px;
    height: 843px;
    padding: 112px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 80px;
  }

  .Container {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 80px;
  }

  .ImageContainer {
    height: 619px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .ContentContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .Content {
    align-self: stretch;
    height: 221px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .Heading {
    color: white;
    font-size: 48px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 57.60px;
    word-wrap: break-word;
  }

  .Text {
    color: white;
    font-size: 18px;
    font-family: 'Acme', sans-serif;
    font-weight: 400;
    line-height: 27px;
    word-wrap: break-word;
  }

  .Actions {
    padding-top: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
  }

  .ButtonContainer {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .ButtonContainer.primary {
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(200px);
  }

  .ButtonContainer.secondary {
    border: 1px solid rgba(255, 255, 255, 0.20);
  }

  .Button {
    color: white;
    font-size: 16px;
    font-family: 'Segoe UI', sans-serif;
    line-height: 24px;
    word-wrap: break-word;
  }
</style>
