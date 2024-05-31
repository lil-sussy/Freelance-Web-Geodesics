<script lang="ts">
  // TypeScript code (if any) goes here
</script>

<div class="Aboutmesection">
  <div class="PictureOfMeSide">
    <img class="WomanPhotograph1" src="/photoOfMe.png" alt="picture of me professional, confident"/>
    <div class="Name">
      <div class="YanRegojo">Yan Regojo</div>
      <div class="DownloadButton">
        <div class="Button">Télécharger le CV</div>
      </div>
      <div class="Link"></div>
    </div>
  </div>
  <div class="BentoLayout">
    <div class="BentoTitle">
      <div class="Aboutme">À propos de Yan R.</div>
      <div class="MyWork">Maestro du Web Design avec une Touche Moderne</div>
    </div>
    <div class="BentoContainer">
      <div class="BentoDescription">
        <div class="Description">
          <span>Pionnier Numérique et Centrale Créative<br /></span>
          <span>
            Depuis le début de mon parcours web à 15 ans, j'ai été à l'avant-garde de l'innovation en ligne. À 16 ans, j'avais déjà fait le grand saut de passionné apprenti à créateur professionnel, en vendant mon premier site web. Aujourd'hui, je mêle l'exubérance juvénile à la technologie de pointe en IA pour offrir des expériences web exceptionnelles adaptées à l'ère moderne. Mon expertise autodidacte ne consiste pas seulement à suivre l'évolution numérique – je cherche à en définir le rythme.
          </span>
        </div>
      </div>
      <div class="BentoSideIcons">
        <img class="Figma" src="https://via.placeholder.com/70x70" />
        <img class="Midjourney" src="https://via.placeholder.com/60x60" />
        <img class="Chatgpt" src="https://via.placeholder.com/60x62" />
        <img class="Photoshop" src="https://via.placeholder.com/60x60" />
      </div>
      <img class="BentoAsset" src="./bento-asset.png" alt="asset of a woman standing proud"/>
      <div class="AssetSideContainer">
        <div class="BentoMissionText">
          <div class="MissionText">
            <span>Élevez Votre Vision avec une Expertise Sur Mesure<br /></span>
            <span>
              Votre Vision Unique, Notre Mission Commune        Ensemble, nous transformerons votre vision en une expérience numérique distinctive. Avec une compréhension approfondie de votre marque et une collaboration continue, les sites web que je crée ne sont pas seulement visuellement impressionnants, mais une véritable représentation du cœur et de l'âme de votre entreprise dans le domaine numérique.
            </span>
          </div>
        </div>
        <div class="BentoModernText">
          <div class="ModernText">
            <span>Une Fusion Moderne de Design et Technologie<br /></span>
            <span>
              Conception Web Améliorée par IA : Au-delà de l'esthétique, j'intègre des technologies IA intelligentes pour créer des sites web qui sont intuitifs et innovants, offrant une expérience utilisateur sophistiquée et engageante.<br />
            </span>
            <span><br /></span>
            <span>
              Expérience Utilisateur au Centre : Les interfaces centrées sur l'utilisateur sont au cœur de mes conceptions, assurant simplicité, engagement et facilité d'utilisation pour captiver les visiteurs et les inciter à revenir.<br />Solutions Réactives : Je crée des sites web avec une fluidité réactive, assurant une performance stellaire et une expérience utilisateur transparente sur tout appareil ou plateforme.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="BentoContrainerCenter">
      <div class="BentConnectText">
        <div class="ConnectText">
          <span>Connectons-nous<br /></span>
          <span>Transformez vos aspirations numériques en réalité</span>
        </div>
      </div>
      <div class="Actions">
        <img class="Lihnkedin" src="https://via.placeholder.com/93x93" alt="linkedin button"/>
        <div class="Button">
          <div class="Button">Commencez maintenant</div>
        </div>
      </div>
    </div>
    <div class="BentoLast">
      <div class="LastText">
        <span> Restez à la Pointe des Tendances Avant-gardistes<br /></span>
        <span>
          Constamment immergé dans les derniers développements web, je m'assure que votre présence en ligne ne soit pas seulement actuelle mais aussi prête pour l'avenir, attirant de nouvelles générations et établissant des références dans l'industrie.
        </span>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
// Reusable classes and mixins
@mixin flex-column($justify: flex-start, $align: flex-start, $gap: 0) {
  flex-direction: column;
  justify-content: $justify;
  align-items: $align;
  gap: $gap;
  display: flex;
}

@mixin text-style($color, $size, $weight, $line-height, $family: 'Segoe UI', $wrap: break-word) {
  color: $color;
  font-size: $size;
  font-weight: $weight;
  line-height: $line-height;
  font-family: $family, sans-serif;
  word-wrap: $wrap;
}

@mixin box-style($padding, $bg-color, $border-radius, $backdrop) {
  padding: $padding;
  background: $bg-color;
  border-radius: $border-radius;
  backdrop-filter: blur($backdrop);
}

.Aboutmesection {
  width: 100%;
  padding: 0 10%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 56px;
  display: inline-flex;

  .PictureOfMeSide {
    @include flex-column(center);

    .WomanPhotograph1 {
      width: 324.53px;
      background: radial-gradient(100% 100% at 50% 50%, rgba(222, 225, 83, 0.20) 0%, rgba(188, 190, 78, 0) 100%);
    }

    .Name {
      @include flex-column(flex-start, flex-start, 29px);

      .YanRegojo {
        @include text-style(white, 40px, 800, 48px, 'Poppins');
      }

      .DownloadButton {
        width: 248px;
        height: 57px;
        padding: 12px 24px;
        border: 1px rgba(255, 255, 255, 0.50) solid;
        backdrop-filter: blur(200px);
        justify-content: center;
        align-items: center;
        gap: 8px;
        display: inline-flex;

        .Button {
          @include text-style(white, 20px, 400, 30px, 'Segoe UI');
        }
      }
    }
  }

  .BentoLayout {
    width: 60%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 23px;
    display: flex;
    flex-wrap: wrap;

    .BentoTitle,
    .BentoDescription,
    .BentoMissionText,
    .BentoModernText,
    .BentConnectText,
    .BentoLast {
      @include box-style(1.5rem, rgba(0, 0, 0, 0.40), 20px, 300px);
      @include flex-column();

      div {
        line-height: 1.2rem;
        &.MyWork {
          @include text-style(white, 1.3rem, 400,1.5rem, 'Segoe UI');
        }
        span {
          font-size: 1rem;
          font-weight: 400;
          @include text-style(white, 0.9rem, 400, 1.1rem, 'Segoe UI');
        }
      }
    }

    .BentoTitle {
      width: 833px;
      padding: 2.5rem;

      .Aboutme {
        @include text-style(white, 56px, 700, 67.20px, 'Poppins');
      }

      .MyWork {
        
      }
    }
    .BentoContainer {
      width: 100%;
      display: flex;
      row-gap: 2rem;
      column-gap: 3%;
      flex-wrap: wrap;
      .BentoDescription {
        width: 80%;
        box-sizing: border-box;
  
        .Description {
          align-self: stretch;
          span {
  
            &:first-child {
              @include text-style(white, 1.2rem, 900, 28px, 'Segoe UI');
            }
          }
        }
      }
      .BentoSideIcons {
        width: 100px;
        box-sizing: border-box;
        @include box-style(15px 16px, rgba(0, 0, 0, 0.40), 20px, 300px);
        @include flex-column(center, 12px);

        .Figma,
        .Midjourney,
        .Chatgpt,
        .Photoshop {
          width: 60px;
          height: 60px;
          border-radius: 12px;
        }

        .Figma {
          width: 70px;
          height: 70px;
        }

        .Chatgpt {
          height: 62px;
          border-radius: 15px;
        }
      }
      .BentoAsset {
        width: 37%;
        height: fit-content;
      }
  
      .AssetSideContainer {
        width: 60%;
        box-sizing: border-box;
        @include flex-column(flex-start, flex-start, 20px);
  
        .BentoMissionText,
        .BentoModernText {
          width: 100%;
  
          .MissionText,
          .ModernText {
            align-self: stretch;
            flex: 1 1 0;
            span {
              &:first-child {
                @include text-style(white, 20px, 900, 28px, 'Segoe UI');
              }
            }
          }
        }
      }
    }



    .BentoContrainerCenter {
      padding: 63px 0;
      @include flex-column(flex-start, flex-start, 10px);

      .BentConnectText {
        width: 417px;
        height: 115px;

        .ConnectText {
          align-self: stretch;
          flex: 1 1 0;
          span {
            &:first-child {
              @include text-style(white, 20px, 900, 28px, 'Acme');
            }
          }
        }
      }

      .Actions {
        justify-content: flex-start;
        align-items: center;
        gap: 34px;
        display: inline-flex;

        .Lihnkedin {
          width: 93px;
          height: 93px;
        }

        .Button {
          width: 284px;
          height: 61px;
          padding: 18px 32px;
          background: rgba(255, 255, 255, 0.13);
          backdrop-filter: blur(200px);
          justify-content: center;
          align-items: center;
          gap: 8px;
          display: flex;

          .Button {
            @include text-style(white, 16px, 600, 24px, 'Roboto');
          }
        }
      }
    }

    .BentoLast {
      width: 393px;
      height: 287px;

      .LastText {
        align-self: stretch;
        flex: 1 1 0;
        span {
          &:first-child {
            @include text-style(white, 20px, 900, 28px, 'Segoe UI');
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1354px) {
  .Aboutmesection {
    padding: 0% 5%;
    .PictureOfMeSide {
      .WomanPhotograph1 {}
      .Name {
        .YanRegojo {}
        .DownloadButton {
          .Button {}
        }
      }
    }
    .BentoLayout {
      .BentoTitle {
        .Aboutme {}
        .MyWork {}
      }
      .BentoDescription {
        .Description {}
      }
      .BentoAsset {}
      .BentoContrainerCenter {
        .BentConnectText {
          .ConnectText {}
        }
        .Actions {
          .Lihnkedin {}
          .Button {
            .Button {}
          }
        }
      }
      .AssetSideContainer {
        .BentoMissionText {
          .MissionText {}
        }
        .BentoModernText {
          .ModernText {}
        }
      }
      .BentoLast {
        .LastText {}
      }
      .BentoSideIcons {
        .Figma {}
        .Midjourney {}
        .Chatgpt {}
        .Photoshop {}
      }
    }
  }
}
@media screen and (max-width: 1038px) {
  .Aboutmesection {
    padding: 0% 5%;
    .PictureOfMeSide {
      .WomanPhotograph1 {}
      .Name {
        .YanRegojo {}
        .DownloadButton {
          .Button {}
        }
      }
    }
    .BentoLayout {
      .BentoTitle {
        .Aboutme {}
        .MyWork {}
      }
      .BentoContainer {
        .BentoDescription {
          width: 100%;
          .Description {}
        }
        .BentoSideIcons {
          height: fit-content;
          .Figma {}
          .Midjourney {}
          .Chatgpt {}
          .Photoshop {}
        }
        .BentoAsset {}
        .AssetSideContainer {
          width: 100%;
          .BentoMissionText {
            .MissionText {}
          }
          .BentoModernText {
            .ModernText {}
          }
        }
      }
      .BentoContrainerCenter {
        width: 100%;
        .BentConnectText {
          width: 100%;
          .ConnectText {}
        }
        .Actions {
          .Lihnkedin {}
          .Button {
            .Button {}
          }
        }
      }
      .BentoLast {
        width: 100%;
        .LastText {}
      }
    }
  }
}
@media screen and (max-width: 796px) {
  .Aboutmesection {
    padding: 0% 5%;
    flex-direction: column;
    .PictureOfMeSide {
      width: 100%;
      .WomanPhotograph1 {}
      .Name {
        .YanRegojo {}
        .DownloadButton {
          .Button {}
        }
      }
    }
    .BentoLayout {
      width: 100%;
      .BentoTitle {
        .Aboutme {}
        .MyWork {}
      }
      .BentoContainer {
        .BentoDescription {
          width: 100%;
          .Description {}
        }
        .BentoSideIcons {
          height: fit-content;
          .Figma {}
          .Midjourney {}
          .Chatgpt {}
          .Photoshop {}
        }
        .BentoAsset {}
        .AssetSideContainer {
          width: 100%;
          .BentoMissionText {
            .MissionText {}
          }
          .BentoModernText {
            .ModernText {}
          }
        }
      }
      .BentoContrainerCenter {
        width: 100%;
        .BentConnectText {
          width: 100%;
          .ConnectText {}
        }
        .Actions {
          .Lihnkedin {}
          .Button {
            .Button {}
          }
        }
      }
      .BentoLast {
        width: 100%;
        .LastText {}
      }
    }
  }
}

</style>