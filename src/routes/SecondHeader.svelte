<script lang="ts">
  // Assuming there's a potential use for scripts, you can import images or functions if needed.
   import board from '$lib/images/assets cute board.png';
	import Button from '../Button.svelte';
</script>

<div class="SecondHeader">
  <div class="Container">
    <div class="Content">
      <div class="ContentContainer">
        <div class="Content">
          <div class="Heading">Dynamisez votre entreprise avec un site web professionnel</div>
          <div class="Text">Un site web professionnel peut aider votre petite entreprise à se développer et à attirer davantage de clients. Il établit une présence en ligne forte, met en valeur vos produits ou services et renforce votre crédibilité.</div>
        </div>
        <div class="Actions">
          <Button style="primary">Contactez-moi</Button>
          <Button style="secondary">Voir mon travail</Button>
        </div>
      </div>
    </div>
    <img class="BoardAsset" src={board} alt="Board DDImage" />
  </div>
</div>

<style lang="scss">
  .SecondHeader {
    width: 100vw;
    height: 880px;
    padding: 112px 64px;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 80px;

    .Container {
      align-self: stretch;
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      gap: 80px;

      .Content {
        flex: 1 1 0;
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 24px;

        .ContentContainer {
          align-self: stretch;
          height: 282px;
          display: flex;
          flex-direction: column;
          gap: 24px;

          .Content {
            align-self: stretch;
            display: flex;
            flex-direction: column;
            gap: 24px;

            .Heading {
              align-self: stretch;
              color: white;
              font-size: 48px;
              font-family: Poppins, sans-serif;
              font-weight: 700;
              line-height: 50.60px;
              word-wrap: break-word;
            }

            .Text {
              align-self: stretch;
              color: white;
              font-size: 18px;
              font-family: Acme, sans-serif;
              font-weight: 400;
              line-height: 27px;
              word-wrap: break-word;
            }
          }

          .Actions {
            padding-top: 16px;
            display: inline-flex;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 16px;

            .StylePrimarySmallFalseDarkModeFalseIconPositionNoIcon, .StyleSecondarySmallFalseDarkModeFalseIconPositionNoIcon {
              padding: 12px 24px;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px;
              background: rgba(255, 255, 255, 0.20);
              backdrop-filter: blur(200px);
            }

            .StyleSecondarySmallFalseDarkModeFalseIconPositionNoIcon {
              border: 1px solid rgba(255, 255, 255, 0.20);
            }
          }
        }
      }

      .BoardAsset {
        height: 650px;
      }
    }
  }

  @media (max-width: 1150px) {
    .SecondHeader {
      .Container {
        gap: 40px;
        .BoardAsset {
          height: 400px;
        }
      }
    }
  }

  @media (max-width: 750px) {
    .SecondHeader {
      width: 100vw;
      height: 653px;
      padding: 12px 23px 112px;
      margin-top: -1rem;
      gap: 80px;

      .Container {
        flex-direction: column-reverse;
        gap: 40px;

        .Frame70 {
          padding: 0 56px;
          display: inline-flex;
          justify-content: center;
          align-items: flex-start;
          gap: 10px;
        }
        .BoardAsset {
          height:40%;
        }
        
        .Content {
          height: 265px;
          gap: 7px;

          .ContentContainer {
            height: 265px;
            gap: 14px;

            .Content {
              height: 183px;
              gap: 14px;

              .Heading {
                font-size: 24px;
                line-height: 28.80px;
              }

              .Text {
                font-size: 12px;
                line-height: 18px;
              }
            }

            .Actions {
              .Button {
                font-size: 12px;
                line-height: 18px;
              }
            }
          }
        }
      }
    }
  }
</style>
