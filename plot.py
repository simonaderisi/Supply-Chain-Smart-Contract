import matplotlib.pyplot as plt

# Function to read the file and get the transaction times
def read_transaction_times(file_name):
    with open(file_name, 'r') as file:
        # Read all lines and convert them to integers (assuming valid input)
        transaction_times = [int(line.strip()) for line in file]
    return transaction_times

# Function to plot the transaction times
def plot_transaction_times(transaction_times):
    # Create the x-axis, which is just the transaction number (starting from 1)
    transactions = range(1, len(transaction_times) + 1)
    
    # Plot the graph
    plt.figure(figsize=(10, 6))
    plt.plot(transactions, transaction_times, marker='o', linestyle='-', color='b')

    # Adding labels and title
    plt.xlabel('Transaction Number')
    plt.ylabel('Milliseconds')
    plt.title('Transaction Times in Milliseconds')
    
    #plt.grid(True)

    # Save plot into output file.
    plt.savefig(output_file)

# Run the script
if __name__ == "__main__":
    print('Hello World')
    file_name = "transaction_meas.txt"
    output_file = "plot.png"
    transaction_times = read_transaction_times(file_name)
    plot_transaction_times(transaction_times)
    print('Bye')

