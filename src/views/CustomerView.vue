<template>
  <div class="code">
    <div id="qrcode"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import QRCode from 'qrcode';

@Options({
  mounted() {
    axios.get('/api/code').then(response => {
      // 在合适的地方调用以下代码生成二维码并展示
      const jsonString = JSON.stringify(response.data);

      QRCode.toDataURL(jsonString, (err, url) => {
        if (err) {
          console.error(err);
          return;
        }
        const img = document.createElement('img');
        img.src = url;
        const qrcodeElement = document.getElementById('qrcode');
        if (qrcodeElement) {
          qrcodeElement.appendChild(img);
        }
      });
    });
  }
})
export default class CodeView extends Vue {
}
</script>


