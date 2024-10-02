<template>
  <div class="clearfix message-box">
    <div class="container h-100">
      <div class="message-content">
        <div class="user-list">
          <div
            class="user-list-header d-flex align-items-center gap-3 justify-content-between border-bottom border-primary"
          >
            <span>User List</span>
            <button type="button" class="btn btn-sm btn-outline-primary px-3 rounded-pill">
              New message
            </button>
          </div>
          <div class="list-content overflow-y-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque tempora nisi
            atque, illo officiis suscipit placeat corrupti exercitationem at error. Rem eveniet
            repudiandae aut fugit quam sint doloremque dolor. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Excepturi maxime nisi laboriosam rerum ipsam aperiam
            molestias error quod deleniti sint odio adipisci optio nihil, officiis possimus
            incidunt. Culpa, fugit corrupti enim facere voluptatem veritatis saepe sunt ad, velit in
            sint! Odit voluptatum, quasi quo dicta doloribus molestias eveniet tenetur non velit
            asperiores est illo vitae mollitia odio recusandae repudiandae minima, dolorum
            consequatur laudantium iusto soluta dolore eius qui. Quibusdam ducimus voluptas
            mollitia! Modi rerum eos repudiandae amet, ad dignissimos, facere quia sed enim facilis
            odio tenetur aspernatur ea, necessitatibus laborum quos. Rem iste repellendus nobis unde
            harum velit, sit est enim aut ex vel aperiam. Laboriosam, impedit! Quos modi quasi
            veritatis praesentium omnis libero, asperiores, voluptate tempora dolores dolor hic vero
            eligendi architecto sunt vel. Cumque quaerat, facilis dignissimos unde quod eius
            perferendis laudantium tempora laboriosam quis minus. Veniam nobis beatae eaque,
            perspiciatis rerum facilis excepturi quia quo sequi quod aliquid earum aspernatur soluta
            neque architecto nam! Sequi dolorum, quasi aliquam veniam eius amet, quo distinctio
            temporibus corrupti fugiat provident eligendi quidem aspernatur blanditiis nulla
            recusandae quis vero voluptatum, quod harum reiciendis placeat? Placeat, nemo hic sed
            quam quis labore accusantium libero eum architecto illo provident suscipit omnis fugit
            expedita!
          </div>
        </div>
        <div class="message-list">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet eius a voluptates.
          Aspernatur nisi porro eos soluta consectetur, architecto eaque cupiditate perferendis
          culpa exercitationem tenetur corporis velit, veritatis harum aperiam iure, maiores facere
          et alias quidem accusantium! Rem exercitationem magnam provident quas illo sunt esse
          voluptatum! Vitae, quae totam.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.message-box {
  --gap: 2rem;
  --list-top-header-height: 3rem;
  --padding-top: 1.5rem;
  --message-box-height: calc(100dvh - 3.5rem);
  --userlist-width: 18.75rem;
  --message-width: calc(100% - calc(var(--userlist-width) + var(--gap)));
  --list-box-bg: #fff;
  --listbox-padding-inline: 1.125rem;
  padding-top: var(--padding-top);
  height: var(--message-box-height);
  background-color: #f5f5f7;
  .message-content {
    display: flex;
    gap: var(--gap);
    height: 100%;
    .user-list {
      background-color: var(--list-box-bg);
      width: var(--userlist-width);
      padding-inline: var(--listbox-padding-inline);
      .user-list-header {
        padding-inline: var(--listbox-padding-inline);
        margin-inline: calc(var(--listbox-padding-inline) * -1);
        height: var(--list-top-header-height);
      }
    }
    .message-list {
      background-color: var(--list-box-bg);
      width: var(--message-width);
      padding-inline: var(--listbox-padding-inline);
    }

    .list-content {
      display: flex;
      flex-wrap: wrap;
      padding: 0.5rem var(--listbox-padding-inline);
      margin-inline: calc(var(--listbox-padding-inline) * -1);
      height: calc(100% - var(--list-top-header-height));
    }
  }
}
</style>
