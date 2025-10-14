javascript:(async function() {
  const sel = window.getSelection().toString().trim();
  if (!sel) {
    alert('テキストを選択してください');
    return;
  }
  
  if (!window.ai || !window.ai.languageModel) {
    alert('Gemini Nanoが利用できません。Chrome Canary with Gemini Nanoが必要です。');
    return;
  }
  
  try {
    const session = await window.ai.languageModel.create({
      systemPrompt: 'あなたは優秀な翻訳者です。入力されたテキストを自然な日本語に翻訳してください。'
    });
    
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:999999;display:flex;align-items:center;justify-content:center;';
    
    const box = document.createElement('div');
    box.style.cssText = 'background:white;padding:20px;border-radius:8px;max-width:600px;max-height:80%;overflow:auto;box-shadow:0 4px 20px rgba(0,0,0,0.3);';
    
    const title = document.createElement('h3');
    title.textContent = '翻訳中...';
    title.style.marginTop = '0';
    
    const content = document.createElement('div');
    content.style.cssText = 'margin-top:15px;line-height:1.6;white-space:pre-wrap;';
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '閉じる';
    closeBtn.style.cssText = 'margin-top:15px;padding:8px 16px;background:#007bff;color:white;border:none;border-radius:4px;cursor:pointer;';
    closeBtn.onclick = () => overlay.remove();
    
    box.appendChild(title);
    box.appendChild(content);
    box.appendChild(closeBtn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    
    const result = await session.prompt(`次のテキストを日本語に翻訳してください:\n\n${sel}`);
    
    title.textContent = '翻訳結果';
    content.textContent = result;
    
    session.destroy();
  } catch (err) {
    alert('エラー: ' + err.message);
  }
})();