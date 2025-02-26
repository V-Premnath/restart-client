import gradio as gr

# Define a chat function to handle messages
def chat(message, history):
    history = history or []  # Initialize history if None
    # Simulate a bot response (you can replace this with a real chatbot or API)
    bot_response = f"Bot: I received '{message}'"
    history.append((f"You: {message}", bot_response))  # Add user and bot messages to history
    return history, history  # Return updated history and display history

# Custom CSS for WhatsApp-like styling
custom_css = """
.chatbot {
    background-color: #ECE5DD;
    border-radius: 10px;
    padding: 10px;
    height: 400px;
    overflow-y: auto;
}
.textbox {
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 10px;
}
"""

# Create the Gradio interface
with gr.Blocks(css=custom_css) as demo:
    # Title for the chat application
    gr.Markdown("## WhatsApp-like Group Chat")
    
    # Chatbot component to display the conversation
    chatbot = gr.Chatbot(elem_classes="chatbot")
    
    # State to store conversation history
    state = gr.State()
    
    # Textbox for user input
    with gr.Row():
        txt = gr.Textbox(
            show_label=False,
            placeholder="Type a message...",
            elem_classes="textbox"
        ).style(container=False)
    
    # Submit button
    with gr.Row():
        submit_btn = gr.Button("Send")
    
    # Define interactions
    txt.submit(chat, [txt, state], [chatbot, state])  # Submit on Enter
    submit_btn.click(chat, [txt, state], [chatbot, state])  # Submit on button click
    
    # Clear textbox after submission
    txt.submit(lambda: "", None, txt)  # Clear textbox on Enter
    submit_btn.click(lambda: "", None, txt)  # Clear textbox on button click

# Launch the application
demo.launch()